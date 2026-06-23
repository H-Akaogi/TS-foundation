import { showMessage } from "./my/my0-5.js";

showMessage("hello", text => text.toUpperCase());
showMessage("hello", text => `*** ${text} ***`);
