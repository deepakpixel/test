var d_helper = document.createElement('div');
var d_style="position:fixed;top:0;left:0;color:#fff;background:#222;padding:5px 1em;font:14px sans-serif;z-index:999999";

d_helper.innerHTML=`<div class="d-helper">
  <strong>
    Yooo... mf, I am in, you piece of sh*t
  </strong>
  <p>
    Lorem ipsum laga denge ab to sabke xddd
  </p>
</div>`;
document.body.append(d_helper)





if (typeof d_helper.style.cssText !== "undefined") {
    d_helper.style.cssText = d_style;
  } else {
    d_helper.setAttribute("style", d_style);
  }
