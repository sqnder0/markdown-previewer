from flask import Flask, render_template, jsonify, request
import markdown


app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/convert', methods = ['POST'])
def convert():
    data = request.get_json()
    text = data.get("text") 
    
    print(f"Text: \n{text}")
    html = markdown.markdown(text)
    print(f"Html: \n{html}")

    return jsonify({"success": True, "html": html})



if __name__ == '__main__':
    app.run(debug=True)