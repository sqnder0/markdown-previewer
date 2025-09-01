# Markdown Previewer

A real-time markdown previewer web application that converts markdown text to HTML instantly as you type. Built with Flask (Python) backend and vanilla JavaScript frontend.

## 🌟 Features

- **Real-time Preview**: See your markdown converted to HTML instantly as you type
- **Split-screen Interface**: Side-by-side markdown editor and HTML preview
- **Clean Design**: Minimalist, responsive interface with rounded borders and intuitive layout
- **Live Conversion**: No need to refresh - changes appear immediately
- **Pure Web Technologies**: Built with Flask, HTML, CSS, and vanilla JavaScript

## 🎯 What It Does

This application provides a simple yet effective way to preview markdown content in real-time. Type markdown syntax in the left panel and watch it transform into formatted HTML in the right panel instantly. Perfect for:

- Writing documentation
- Creating README files
- Drafting blog posts in markdown
- Learning markdown syntax
- Quick markdown-to-HTML conversion

## 🧪 Try It Out

Visit the live demo at: **[sqnder.hackclub.app/markdown-to-html](https://sqnder.hackclub.app/markdown-to-html)**

## 🔧 How It Works

The application consists of:

- **Backend (`app.py`)**: Flask server with a `/convert` endpoint that uses Python's `markdown` library to convert markdown text to HTML
- **Frontend (`templates/index.html`)**: Split-screen interface with a textarea for markdown input and a div for HTML output
- **Styling (`static/index.css`)**: Clean, responsive CSS with a 50/50 split layout and rounded borders
- **Interactivity (`static/index.js`)**: JavaScript that captures input events and sends AJAX requests to the Flask backend for real-time conversion

## 📁 Project Structure

```
markdown-previewer/
├── app.py              # Flask application with conversion endpoint
├── requirements.txt    # Python dependencies
├── templates/
│   └── index.html      # Main HTML template with split-screen layout
├── static/
│   ├── index.css       # Styling for the interface
│   └── index.js        # JavaScript for real-time conversion
└── README.md           # This file
```

## 🚀 Key Technologies

- **Flask**: Lightweight Python web framework
- **Python Markdown**: Library for converting markdown to HTML
- **Vanilla JavaScript**: For real-time user interactions
- **CSS3**: Modern styling with flexbox layout

## 📝 Example Usage

1. Visit the application in your browser
2. Start typing markdown in the left panel:

   ```markdown
   # My Document

   This is **bold text** and this is _italic text_.

   - List item 1
   - List item 2

   [Link to Google](https://google.com)
   ```

3. Watch as the HTML preview appears instantly in the right panel

## 🎨 Interface

The application features a clean, split-screen design:

- **Left Panel**: Markdown editor with syntax highlighting-ready textarea
- **Right Panel**: Live HTML preview with proper formatting
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Minimal UI**: Focus on content with distraction-free interface
