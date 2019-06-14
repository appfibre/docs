if (System) System.register('../../lib/codemirror', '@cdnjs/codemirror/5.47.0/codemirror.js');

define( [  '@cdnjs/codemirror/5.47.0/codemirror.js'
        , '@cdnjs/codemirror/5.47.0/codemirror.css'
        , '@cdnjs/codemirror/5.47.0/addon/edit/matchbrackets.js'
        , '@cdnjs/codemirror/5.47.0/addon/comment/continuecomment.js'
        , '@cdnjs/codemirror/5.47.0/addon/comment/comment.js'
       ], function(CodeMirror) {

         return function Component (base) {
         return  { "constructor": function (props, children) { this.state = { ref: this["init"].bind(this), value: props.value, onChange: this["onChange"].bind(this)}; }
                  , "init": function(txt) {  if (txt) { this["editor"] = CodeMirror.fromTextArea(txt, this.props.settings); this["editor"].on('change', this["onChange"].bind(this));} }
                  , "onChange": function (e) { this.setState({value: e.getValue()}, function() { if (this.props.onChange) this.props.onChange({target: {value: this.state.value}}); }); }
                  , "render": function() { return base.render(["textarea", this.state, this.props.children]);}
                  , "componentWillReceiveProps": function(nextProps) { /*if (this["editor"] && nextProps.value !== this.state.value) {this["editor"].setValue(nextProps.value); this.setState({value: nextProps.value}); return false;}*/  }
                  , "componentWillMount": function() { } 
                  , "componentWillUnmount": function() { if (this["editor"]) { this["editor"].toTextArea(); this["editor"] = null; } }
                  };
    }
});