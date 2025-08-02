# 🧮 React Calculator App

Una calculadora avanzada construida con React, diseñada para practicar arquitectura limpia, manejo de estado y persistencia en frontend.

## ✨ Características

- ✅ Operaciones básicas y avanzadas (`+ - * / ^ ( )`)
- ✅ Evaluación de expresiones con [mathjs](https://mathjs.org/)
- ✅ Soporte de teclado físico (`Enter`, `Backspace`, `Escape`)
- ✅ Historial visual persistente con localStorage
- ✅ Sistema de memoria (`M+`, `M-`, `MR`, `MC`)
- ✅ Tema claro / oscuro
- ✅ Modularización con componentes y lógica separada
- ✅ Custom hooks: `useMemory`, `useHistory`
- ✅ Manejo correcto de React.StrictMode

## 📁 Estructura del proyecto

/src
  /components
    Header.jsx
    Display.jsx
    Keypad.jsx
  /hooks
    useMemory.js
    useHistory.js
  /utils
    calculatorLogic.js
    keyboardHandler.js
App.jsx
main.jsx

## 🚀 Cómo ejecutarlo

```bash
yarn install
yarn dev

También funciona con npm install && npm run dev

🧠 Lecciones aprendidas

-Cómo usar useRef para manejar valores actuales en eventos

-Cómo separar lógica con funciones puras

-Cuándo usar y cómo estructurar custom hooks

-Cómo gestionar el localStorage de forma segura

-Cómo pensar un proyecto React como si fuera a producción

📌 Autor
Desarrollado por omanzanillazapata, como parte de su viaje en el máster de ConquerBlocks