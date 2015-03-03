this["Appility"] = this["Appility"] || {};
this["Appility"]["Templates"] = this["Appility"]["Templates"] || {};

this["Appility"]["Templates"]["home.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h5></h5>\n<p>This is a test application.</p>\n\n<p>To run:\n	clone project \n\n	run npm install\n\n	run grunt\n\n\n\nProject source available at Github\n\nTechnologies: Backbone, Require, SASS, Grunt\n\nDeveloped using: Sublime Text 2, Git\n\nNote: Javascript optimized using r.js. To run optimizer: node external/r.js -o build.js\n\n</p>";
  });

this["Appility"]["Templates"]["list.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h1>Titles</h1>\n		\n		<table class=\"pure-table\">\n	    <thead>\n	        <tr>\n	            <th>#</th>\n	            <th>Make</th>\n	            <th>Model</th>\n	            <th>Year</th>\n	        </tr>\n	    </thead>\n	    <tbody>\n	        <tr class=\"pure-table-odd\">\n	            <td>1</td>\n	            <td>Honda</td>\n	            <td>Accord</td>\n	            <td><a class=\"pure-button pure-button-primary\" href=\"#\">A Primary Button</a></td>\n	        </tr>\n\n	        <tr>\n	            <td>2</td>\n	            <td>Toyota</td>\n	            <td>Camry</td>\n	            <td><a class=\"pure-button pure-button-primary\" href=\"#\">A Primary Button</a></td>\n	        </tr>\n\n	        <tr class=\"pure-table-odd\">\n	            <td>3</td>\n	            <td>Hyundai</td>\n	            <td>Elantra</td>\n	            <td><a class=\"pure-button pure-button-primary\" href=\"#\">A Primary Button</a></td>\n	        </tr>\n\n	        <tr>\n	            <td>4</td>\n	            <td>Ford</td>\n	            <td>Focus</td>\n	            <td><a class=\"pure-button pure-button-primary\" href=\"#\">A Primary Button</a></td>\n	        </tr>\n\n	        <tr class=\"pure-table-odd\">\n	            <td>5</td>\n	            <td>Nissan</td>\n	            <td>Sentra</td>\n	            <td><a class=\"pure-button pure-button-primary\" href=\"#\">A Primary Button</a></td>\n	        </tr>\n\n	        <tr>\n	            <td>4</td>\n	            <td>Ford</td>\n	            <td>Focus</td>\n	            <td><a class=\"pure-button pure-button-primary\" href=\"#\">A Primary Button</a></td>\n	        </tr>\n\n	        <tr class=\"pure-table-odd\">\n	            <td>5</td>\n	            <td>Nissan</td>\n	            <td>Sentra</td>\n	            <td><a class=\"pure-button pure-button-primary\" href=\"#\">A Primary Button</a></td>\n	        </tr>\n\n	        <tr>\n	            <td>4</td>\n	            <td>Ford</td>\n	            <td>Focus</td>\n	            <td><a class=\"pure-button pure-button-primary\" href=\"#\">A Primary Button</a></td>\n	        </tr>\n	    </tbody>\n		</table>\n	\n	</article>\n	";
  });

this["Appility"]["Templates"]["nav.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  
  return "\n	<li><a href=\"/profile\">My profile</a></li>\n	<li><a href=\"/profile/titles\">My Titles</a></li>\n	<li><a href=\"/logout\">Logout</a></li>\n";
  }

function program3(depth0,data) {
  
  
  return "\n    <li><a href=\"/signin\">Sign In</a></li>\n    <li><a href=\"/register\">Register</a></li>\n";
  }

  buffer += "<ul>\n	<li class=\"pure-menu-selected\"><a href=\"/\">Home</a></li>\n	<li><a href=\"/titles\">Titles</a></li>\n";
  stack1 = helpers['if'].call(depth0, depth0.authStatus, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n";
  return buffer;
  });

this["Appility"]["Templates"]["profile.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  
  return " checked";
  }

  buffer += "<section id=\"profile-view\">\n\n	<form class=\"pure-form pure-form-stacked\" action=\"\" method=\"post\">\n    	<fieldset>\n        <legend>Profile</legend>\n\n        <div class=\"errors pure-alert pure-alert-error\">\n            <h5>Errors:</h5>\n            <p class=\"inner\"></p>\n        </div>\n\n        <label for=\"firstName\">FirstName</label>\n        <input id=\"firstName\" name=\"firstName\" type=\"text\" placeholder=\"firstName\" value=\"";
  if (stack1 = helpers.firstName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.firstName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n\n        <label for=\"lastName\">LastName</label>\n        <input id=\"lastName\" name=\"lastName\" type=\"text\" placeholder=\"lastName\" value=\"";
  if (stack1 = helpers.lastName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lastName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n\n        <label for=\"username\">Username</label>\n        <input id=\"username\" name=\"username\" type=\"text\" placeholder=\"username\" value=\"";
  if (stack1 = helpers.username) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.username; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n\n        <label for=\"age\">Age</label>\n        <input id=\"age\" name=\"age\" type=\"text\" placeholder=\"Age\" value=\"";
  if (stack1 = helpers.age) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.age; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n\n        <label for=\"phoneNumber\">phoneNumber</label>\n        <input id=\"phoneNumber\" name=\"password\" type=\"text\" placeholder=\"phoneNumber\"  value=\"";
  if (stack1 = helpers.phoneNumber) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.phoneNumber; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n\n        <label for=\"genderIsFemale0\" class=\"pure-radio\">\n        <input id=\"genderIsFemale0\" type=\"radio\" name=\"genderIsFemale\" value=\"false\" ";
  options = {hash:{},inverse:self.program(1, program1, data),fn:self.noop,data:data};
  if (stack1 = helpers.genderIsFemale) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.genderIsFemale; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.genderIsFemale) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">Male</label>\n\n        <label for=\"genderIsFemale1\" class=\"pure-radio\">\n        <input id=\"genderIsFemale1\" type=\"radio\" name=\"genderIsFemale\" value=\"true\" ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.genderIsFemale) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.genderIsFemale; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.genderIsFemale) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">Female</label>\n\n        <label for=\"notes\">Notes</label>\n        <textarea id=\"notes\" name=\"notes\" type=\"text\" placeholder=\"Notes\">";
  if (stack1 = helpers.notes) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.notes; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n        </textarea>\n\n        <label for=\"password\">Password</label>\n        <input id=\"password\" name=\"password\" type=\"password\" placeholder=\"Password\" value=\"";
  if (stack1 = helpers.password) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.password; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n\n        <button type=\"submit\" class=\"button-success pure-button\">Update</button>\n    	</fieldset>\n	</form>\n</section>\n  \n";
  return buffer;
  });

this["Appility"]["Templates"]["register.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  
  return " checked";
  }

  buffer += "	<section id=\"register-view\">\n		<form class=\"pure-form pure-form-stacked\" action=\"\" method=\"post\">\n	    	<fieldset>\n	        <legend>Register</legend>\n\n	        <div class=\"errors pure-alert pure-alert-error\" role=\"group\">&nbsp;</div>\n\n    	    <label for=\"firstName\">FirstName</label>\n            <input id=\"firstName\" name=\"firstName\" type=\"text\" placeholder=\"FirstName\" value=\"";
  if (stack1 = helpers.firstName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.firstName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n\n            <label for=\"lastName\">LastName</label>\n            <input id=\"lastName\" name=\"lastName\" type=\"text\" placeholder=\"LastName\" value=\"";
  if (stack1 = helpers.lastName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lastName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n\n            <label for=\"username\">Username</label>\n            <input id=\"userName\" name=\"username\" type=\"text\" placeholder=\"Username\" value=\"";
  if (stack1 = helpers.userName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.userName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n\n            <label for=\"age\">Age</label>\n            <input id=\"age\" name=\"age\" type=\"text\" placeholder=\"Age\" value=\"";
  if (stack1 = helpers.age) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.age; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n\n            <label for=\"phoneNumber\">Phone number</label>\n            <input id=\"phoneNumber\" name=\"phoneNumber\" type=\"text\" placeholder=\"079909998788\"  value=\"";
  if (stack1 = helpers.phoneNumber) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.phoneNumber; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n\n            <label for=\"genderIsFemale0\" class=\"pure-radio\">\n            <input id=\"genderIsFemale0\" type=\"radio\" name=\"genderIsFemale\" value=\"false\" ";
  options = {hash:{},inverse:self.program(1, program1, data),fn:self.noop,data:data};
  if (stack1 = helpers.genderIsFemale) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.genderIsFemale; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.genderIsFemale) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">Male</label>\n\n            <label for=\"genderIsFemale1\" class=\"pure-radio\">\n            <input id=\"genderIsFemale1\" type=\"radio\" name=\"genderIsFemale\" value=\"true\" ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.genderIsFemale) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.genderIsFemale; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.genderIsFemale) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">Female</label>\n\n            <label for=\"notes\">Notes</label>\n            <textarea id=\"notes\" name=\"notes\" type=\"text\" placeholder=\"Notes\">";
  if (stack1 = helpers.notes) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.notes; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</textarea>\n\n            <label for=\"password\">Password</label>\n            <input id=\"password\" name=\"password\" type=\"password\" placeholder=\"Password\" value=\"";
  if (stack1 = helpers.password) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.password; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n\n	        <button type=\"submit\" class=\"button-success pure-button\">Register</button>\n	    	</fieldset>\n		</form>\n	</section>";
  return buffer;
  });

this["Appility"]["Templates"]["signin.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<section id=\"signin-view\">\n\n	<form class=\"pure-form pure-form-stacked\" action=\"\" method=\"post\">\n    	<fieldset>\n        <legend>Sign In</legend>\n\n        <div class=\"errors pure-alert pure-alert-error\">\n            <h5>Errors:</h5>\n            <p class=\"inner\"></p>\n        </div>\n\n        <label for=\"username\">Username</label>\n        <input id=\"username\" name=\"username\" type=\"text\" placeholder=\"Username\">\n\n        <label for=\"password\">Password</label>\n        <input id=\"password\" name=\"password\" type=\"password\" placeholder=\"Password\">\n\n        <button type=\"submit\" class=\"button-success pure-button\">Sign in</button>\n    	</fieldset>\n	</form>\n</section>";
  });

this["Appility"]["Templates"]["title.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  
  return "\n<td><a class=\"pure-button pure-button-primary\" href=\"//profile/{userId}/titles/{titleId}\">Add to my titles</a>\n";
  }

function program3(depth0,data) {
  
  
  return "\n<td><a class=\"pure-button pure-button-primary\" href=\"//profile/{userId}/titles/{titleId}\">Remove</a></td>\n";
  }

  buffer += "<td>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n<td>";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n\n";
  stack2 = ((stack1 = ((stack1 = ((stack1 = depth0.options),stack1 == null || stack1 === false ? stack1 : stack1.buttonAdd)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1)),blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n";
  stack2 = ((stack1 = ((stack1 = ((stack1 = depth0.options),stack1 == null || stack1 === false ? stack1 : stack1.buttonRemove)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1)),blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data}));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n";
  return buffer;
  });

this["Appility"]["Templates"]["titles.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<caption>Titles</caption>\n<tbody class=\"inner\">\n</tbody>";
  });