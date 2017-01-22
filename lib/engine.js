'use strict';

const fs = require('fs');
const path = require('path');
const templates = {};

module.exports = {
  load: (name) => {
    const templatePath = path.resolve(`./app/templates/${name}.html`);
    const template = fs.readFileSync(templatePath, 'utf8');
    templates[name] = template;
  },

  render: (name, data) => {
    let template = templates[name];
    if (data) Object.keys(data).forEach(key => template = template.replace(`{{${key}}}`, data[key]));
    return template;
  },
};
