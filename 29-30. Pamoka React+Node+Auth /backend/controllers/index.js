import bcrypt from "bcrypt"; // kad uzsifruotumem password
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/User.js";

dotenv.config();

export async function register(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" }); // parasom return, kad toliau musu kodo nebevykdytu
    } // pries registracija mes dazniausiai norim patikrinti, ar jau yra toks useris su tokiu email

    //jeigu nera userio, mes ji noresim issaugot duomenu bazej. Dabar issaugosim uzhashuota password
    const hashedPassword = await bcrypt.hash(password, 10); // 1. pasiduodam ka, 2. kazkoks random stringas ar kas, ka prideda prie musu reiksmes. Padaro dar saugesni hashavima. Arba galim skaiciu pasiduoti (savo algoritma pasileidzia ir sugeneruoja salt uz mus)
    const newUser = new User({ email, password: hashedPassword }); // sukurem nauja user, belieka ji issaugot:
    await newUser.save(); // kitas budas, vietoj .create
    res.status(201).json({ message: "User created successfully" }); // 201 reiskia, kad kazka naujo idejom i duomenu baze
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }); // 1. patikrint, ar su tokiu email isvis egzistuoja toks user
    if (!user) {
      return res.status(400).json({ message: "User with this email does not exist" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password" });
    }
    // jeigu password teisingas, norim frontendui jwt tokena nusiusti. Ir su tuo tokenu frontend gales mums i backenda siuntineti requestus ir mes taip zinosim, kad tas useris yra tikrai prisijunges. Also, kai decodinam tokena, galim gauti userio id
    const token = jwt.sign({ id: user.id }, process.env.JWT_SALT, { expiresIn: "1h" });

    res.status(200).json({ token, permissions: user.permissions }); // kartais useri ir tokena grazina. Dabar frontendui ir tokena ir permissions nusiusim
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function addPermissions(req, res) {
  try {
    const { permissions } = req.body;
    const { id } = req.params;

    const user = await User.findById(id);
    user.permissions = permissions; // tsg uzdesim pilnai naujus permissions (permusam tai, kas buvo)
    await user.save();

    res.status(200).json({ message: "Permissions added successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function writeStuff(req, res) {
  try {
    const id = req.userId;
    const user = await User.findById(id);
    if (user.permissions.includes("write")) {
      res.status(200).json({ message: "added stuff to the database" });
    } else {
      res.status(403).json({ error: "User does not have permissions to write" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}
