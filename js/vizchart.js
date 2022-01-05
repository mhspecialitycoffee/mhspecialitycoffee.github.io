
new roughViz.BarH({
    element: '#progSkills', // container selection
    data: 'data/skills.csv',
    labels: 'Technology',
    values: 'Level',
    interactive:true,
    title: 'Programming Skills',
    titleFontSize: '1.5rem',
    labelFontSize:'1.5rem',
    tooltipFontSize:'1.5rem',
    axisFontSize:'1.5rem',
    stroke:'#dc612c',
    roughness:2,
    color:'#4ab19a',
    font: 'sketch_rockwellregular',
    fillStyle: 'zigzag',
    padding:0.3,
    margin:{top: 50, right: 20, bottom: 70, left: 150}

});



  new roughViz.BarH({
    element: '#languages', // container selection
    data: 'data/languages.csv',
    labels: 'Language',
    values: 'Level',
    title: 'Languages',
    interactive:true,
    titleFontSize: '1.5rem',
    labelFontSize:'1.5rem',
    tooltipFontSize:'1.5rem',
    axisFontSize:'1.5rem',
    stroke:'#dc612c',
    roughness:2,
    color:'#4ab19a',
    font: 'sketch_rockwellregular',
    fillStyle: 'zigzag',
    padding:0.3,
    margin:{top: 50, right: 20, bottom: 70, left: 150},

});

new roughViz.Pie({
    element: '#experience', // container selection
    data: 'data/experience.csv',
    labels: 'Experience',
    fillStyle: 'zigzag',
    tooltipFontSize:'1.5rem',
    values: 'Level',
    title: 'Experience',
    titleFontSize: '1.5rem',
    font: 'sketch_rockwellregular',
    margin: {top: 50, bottom: 100, left: 40, right: 100},
    roughness: 2,
    strokeWidth: 1,
    innerStrokeWidth: 2,
    colors:["#dc612c","#194e6d","#4ab19a","#48302b"]
    });

/**
 * Utility function to add CSS in multiple passes.
 * @param {string} styleString
 */
function addStyle(styleString) {
    const style = document.createElement('style');
    style.textContent = styleString;
    document.head.append(style);
  }
  
  addStyle(`
    g.xAxisprogSkills, g.xAxislanguages {
        display: none;
    }
    g.yAxisprogSkills, g.yAxislanguages {
        color: #1c1c1b;
    }
    div#progSkills, div#languages, div#experience{
      color: #194e6d;
    }
  `);
// sleep time expects milliseconds
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
var languagesHandler = function(lang){
  alert(lang);
}

// Usage!
sleep(500).then(() => {
    var langElements = document.getElementsByClassName('languages');
    var attrXs = [];
    for(var i = 0; i<langElements.length;i++){
      attrXs.push('languages-'+langElements[i].getAttribute('attrX'));
      langElements[i].setAttribute("id", 'languages-'+langElements[i].getAttribute('attrX'));
      //langElements[i].addEventListener('click',() => languagesHandler(langElements[i].getAttribute('attrX')));
    };
   /* for(var i = 0; i<attrXs.length;i++){
      console.log(attrXs[i]);
      switch(attrXs[i]) {
        case 'languages-Spanish':
          document.getElementById(attrXs[i]).addEventListener('click',() => alert('Spanish'));
          break;
        case 'languages-French':
          document.getElementById(attrXs[i]).addEventListener('click',() => alert('French'));
          break;
        case 'languages-English':
          document.getElementById(attrXs[i]).addEventListener('click',() => alert('English'));
          break;
        default:
          // code block
      }

    };*/
    //Modal.init();
    
});
sleep(2500).then(() => {
  //var langElements = document.getElementById('languages-Spanish');
 
});
