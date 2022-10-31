require("onnxjs");

const session= new onnx.InferenceSession()
session.loadModel("https://drive.google.com/file/d/1VDSLLerOYZb0jpEQ0KDEU_AdKSS32SKB/view?usp=sharing")