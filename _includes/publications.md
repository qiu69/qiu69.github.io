## 📝 Publications & Preprints

<div class="publications">
<ol class="bibliography">

  <h3 class="category-title" style="margin: 30px 0 15px 15px; border-bottom: 2px solid #eee; padding-bottom: 10px;">Time Series Forecasting</h3>

  {% for link in site.data.publications.forecasting %}
  <li style="margin-bottom: 20px;">
    <div class="pub-row" style="display: flex; flex-wrap: wrap;">
      <div class="col-sm-3 abbr" style="position: relative; padding-right: 15px; padding-left: 15px; min-width: 150px;">
        {% if link.image %} 
        <img src="{{ link.image }}" class="teaser img-fluid z-depth-1" style="width: 100%; height: auto; border-radius: 4px;"> 
        {% endif %}
        {% if link.conference_short %} 
        <abbr class="badge" style="position: absolute; top: 0; left: 15px;">{{ link.conference_short }}</abbr> 
        {% endif %}
      </div>
      <div class="col-sm-9" style="position: relative; padding-right: 15px; padding-left: 20px;">
          <div class="title" style="font-weight: bold;"><a href="{{ link.pdf }}">{{ link.title }}</a></div>
          <div class="author">{{ link.authors }}</div>
          <div class="periodical"><em>{{ link.conference }}</em></div>
        <div class="links" style="margin-top: 5px;">
          {% if link.pdf %} <a href="{{ link.pdf }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px; border: 1px solid #ccc;">PDF</a> {% endif %}
          {% if link.code %} <a href="{{ link.code }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px; border: 1px solid #ccc;">Code</a> {% endif %}
          {% if link.notes %} <strong> <i style="color:#e74d3c; margin-left: 5px;">{{ link.notes }}</i></strong> {% endif %}
        </div>
      </div>
    </div>
  </li>
  {% endfor %}

  <h3 class="category-title" style="margin: 40px 0 15px 15px; border-bottom: 2px solid #eee; padding-bottom: 10px;">Anomaly Detection</h3>

  {% for link in site.data.publications.anomaly_detection %}
  <li style="margin-bottom: 20px;">
    <div class="pub-row" style="display: flex; flex-wrap: wrap;">
      <div class="col-sm-3 abbr" style="position: relative; padding-right: 15px; padding-left: 15px; min-width: 150px;">
        {% if link.image %} <img src="{{ link.image }}" class="teaser img-fluid z-depth-1" style="width: 100%; height: auto; border-radius: 4px;"> {% endif %}
        {% if link.conference_short %} <abbr class="badge" style="position: absolute; top: 0; left: 15px;">{{ link.conference_short }}</abbr> {% endif %}
      </div>
      <div class="col-sm-9" style="position: relative; padding-right: 15px; padding-left: 20px;">
          <div class="title" style="font-weight: bold;"><a href="{{ link.pdf }}">{{ link.title }}</a></div>
          <div class="author">{{ link.authors }}</div>
          <div class="periodical"><em>{{ link.conference }}</em></div>
        <div class="links" style="margin-top: 5px;">
          {% if link.pdf %} <a href="{{ link.pdf }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px; border: 1px solid #ccc;">PDF</a> {% endif %}
          {% if link.code %} <a href="{{ link.code }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px; border: 1px solid #ccc;">Code</a> {% endif %}
          {% if link.notes %} <strong> <i style="color:#e74d3c; margin-left: 5px;">{{ link.notes }}</i></strong> {% endif %}
        </div>
      </div>
    </div>
  </li>
  {% endfor %}

  <h3 class="category-title" style="margin: 40px 0 15px 15px; border-bottom: 2px solid #eee; padding-bottom: 10px;">Benchmarks & Surveys</h3>

  {% for link in site.data.publications.benchmarks_surveys %}
  <li style="margin-bottom: 20px;">
    <div class="pub-row" style="display: flex; flex-wrap: wrap;">
      <div class="col-sm-3 abbr" style="position: relative; padding-right: 15px; padding-left: 15px; min-width: 150px;">
        {% if link.image %} <img src="{{ link.image }}" class="teaser img-fluid z-depth-1" style="width: 100%; height: auto; border-radius: 4px;"> {% endif %}
        {% if link.conference_short %} <abbr class="badge" style="position: absolute; top: 0; left: 15px;">{{ link.conference_short }}</abbr> {% endif %}
      </div>
      <div class="col-sm-9" style="position: relative; padding-right: 15px; padding-left: 20px;">
          <div class="title" style="font-weight: bold;"><a href="{{ link.pdf }}">{{ link.title }}</a></div>
          <div class="author">{{ link.authors }}</div>
          <div class="periodical"><em>{{ link.conference }}</em></div>
        <div class="links" style="margin-top: 5px;">
          {% if link.pdf %} <a href="{{ link.pdf }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px; border: 1px solid #ccc;">PDF</a> {% endif %}
          {% if link.code %} <a href="{{ link.code }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px; border: 1px solid #ccc;">Code</a> {% endif %}
          {% if link.notes %} <strong> <i style="color:#e74d3c; margin-left: 5px;">{{ link.notes }}</i></strong> {% endif %}
        </div>
      </div>
    </div>
  </li>
  {% endfor %}

</ol>
</div>
