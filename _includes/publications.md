## 📝 Publications & Preprints

<div class="publications">
<ol class="bibliography" style="list-style: none; padding-left: 0;">

  {% assign categories = "forecasting|Time Series Forecasting,anomaly_detection|Anomaly Detection,benchmarks_surveys|Benchmarks & Surveys" | split: "," %}

  {% for category in categories %}
    {% assign cat_info = category | split: "|" %}
    {% assign cat_key = cat_info[0] %}
    {% assign cat_title = cat_info[1] %}

    <h3 class="category-title" style="margin: 40px 0 20px 0; border-bottom: 2px solid #f1f1f1; padding-bottom: 10px; font-weight: bold; color: #003061;">{{ cat_title }}</h3>
    
    {% for link in site.data.publications[cat_key] %}
    <li style="margin-bottom: 35px;">
      <div class="pub-row" style="display: flex; align-items: flex-start; flex-wrap: nowrap;">
        
        <div class="col-left" style="flex: 0 0 220px; position: relative; margin-right: 25px;">
          {% if link.image %}
          <div class="img-wrapper" style="box-shadow: 0 4px 10px rgba(0,0,0,0.1); border-radius: 6px; overflow: hidden; background: #fff;">
            <img src="{{ link.image }}" style="width: 100%; height: auto; display: block;">
          </div>
          {% endif %}
          
          {% if link.conference_short %}
          <abbr class="badge" style="position: absolute; top: -10px; left: -10px; background-color: #003061; color: white; padding: 4px 10px; border-radius: 4px; font-size: 11px; font-weight: bold; z-index: 5; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">
            {{ link.conference_short }}
          </abbr>
          {% endif %}
        </div>
    
        <div class="col-right" style="flex: 1; min-width: 0;">
          <div class="title" style="font-size: 1.1rem; font-weight: 700; margin-bottom: 6px; line-height: 1.3;">
            <a href="{{ link.pdf }}" style="color: #2980b9; text-decoration: none;">{{ link.title }}</a>
          </div>
          
          <div class="author" style="font-size: 0.95rem; color: #444; margin-bottom: 4px;">
            {{ link.authors }}
          </div>
          
          <div class="periodical" style="font-style: italic; color: #666; font-size: 0.9rem; margin-bottom: 10px;">
            {{ link.conference }}
          </div>
    
          <div class="links" style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
            {% if link.pdf %} 
            <a href="{{ link.pdf }}" class="btn btn-sm" target="_blank" style="padding: 2px 10px; border: 1px solid #444; border-radius: 4px; font-size: 12px; color: #333; text-decoration: none; font-weight: 500;">PDF</a> 
            {% endif %}
            
            {% if link.code %} 
            <a href="{{ link.code }}" class="btn btn-sm" target="_blank" style="padding: 2px 10px; border: 1px solid #444; border-radius: 4px; font-size: 12px; color: #333; text-decoration: none; font-weight: 500;">Code</a> 
            {% endif %}
    
            {% if link.notes %}
            <span class="notes" style="color: #e74d3c; font-weight: 600; font-style: italic; font-size: 13px; margin-left: 5px;">
              {{ link.notes }}
            </span>
            {% endif %}
          </div>
        </div>
      </div>
    </li>
    {% endfor %}
  {% endfor %}

</ol>
</div>
