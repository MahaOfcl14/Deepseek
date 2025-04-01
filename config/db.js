import mongoose from "mongoose";

let cached = global.mongoose || {conn: null, promise: null}

