# 📋 Floating Clipboard Widget

A minimal, draggable widget built with Electron that helps you copy your frequently used links (email, resume, GitHub, LinkedIn) with a single click. Designed especially for job seekers who apply to multiple roles and want to skip the hassle of copy-pasting every time.

&#x20;

---

## ✨ Features

- ✅ 1-click copy to clipboard for:
  - Email
  - Resume (Google Drive)
  - GitHub profile
  - LinkedIn profile
- 🮲 Draggable floating window
- 🧰 Sits in the system tray
- 🔀 Auto-launches on startup
- 🔒 Stays running in the background
- 🌐 Tooltips for clarity
- 🎨 Clean design with PNG icons

---

## 📦 Installation & Setup

### 1. Clone the repo

```bash
git clone https://github.com/your-username/floating-clipboard-widget.git
cd floating-clipboard-widget
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm start
```

---

## 📁 Folder Structure

```
src/
├── index.html            # Widget UI
├── settings.html         # Settings UI
├── renderer.js           # Widget logic
├── settings.js           # Settings logic
├── styles.css            # Widget styling
├── settingStyles.css     # Settings styling
├── assets/               # PNG icon images
│   ├── email.png
│   ├── resume.png
│   ├── github.png
│   └── linkedin.png
main.js                   # Electron entry point
```

---

## 🔧 Building a Windows `.exe`

To create a packaged `.exe`:

1. Install the Electron packager:

```bash
npm install --save-dev electron-packager
```

2. Build your app:

```bash
npx electron-packager . ClipboardWidget --platform=win32 --arch=x64 --icon=src/assets/chopper.ico --overwrite
```

> You’ll find the `.exe` inside the newly created `ClipboardWidget-win32-x64/` folder.

## That chopper icon is insisted upon! XD

## 🛠 Tech Stack

- [Electron](https://www.electronjs.org/)
- HTML5 + CSS3
- JavaScript
- Node.js clipboard API
- Auto-launch + Tray integration

---

## 📸 Screenshots

> ![Widget Demo](demo.gif)

---

## 💡 Inspiration

I built this out of personal frustration while applying for jobs. It now saves me a few clicks every time — hope it helps you too!

---

## 📄 License

MIT License

---

## 🙌 Contributions

Feel free to open issues or submit PRs. Ideas and suggestions are welcome!
