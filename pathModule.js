// const path = require("path");
// const fs = require("fs");
import path from 'path'
import fs from 'fs'

const uploadPath = path.join("C:/Users/John Doe/Desktop/02C-SirAsad/NODEJS", "uploads");

// console.log(uploadPath);

fs.writeFileSync('extra.txt', "Extra Logic File");
