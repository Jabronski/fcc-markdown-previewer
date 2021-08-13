import './App.css';
import React, { useEffect, useState, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  
  let marked = require("marked")

  marked.setOptions({
  breaks: true
  })

  const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

  class TextPreviewer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        markdown: placeholder
      };
      
      this.handleChange = this.handleChange.bind(this);
      
    }

    handleChange(e) {
      this.setState({
        markdown: e.target.value
      });
    }

    render() {
      return (
        <div class="container">
          <div class="row">
            <div id="left-pane" class="col">
              <label for="editor">Markdown:</label>
              <textarea id="editor" class="form-control h-100 d-inline-block" type="text" value={this.state.markdown} onChange={this.handleChange}></textarea>
            </div>
            <div id="right pane" class="col">
              <label for="preview">Output:</label>
              <div id="preview" dangerouslySetInnerHTML = {{__html: marked(this.state.markdown, { renderer: renderer })}}></div>
            </div>
          </div>
        </div>
        
      );
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        
        <TextPreviewer />
        
      </header>
    </div>
  );
}

const placeholder = `# Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  
  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `;

export default App;
