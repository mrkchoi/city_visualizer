class Filter {
  constructor() {
    this.filterData();
  }

  filterData() {
    const tooltip = d3
      .select(`.header__tooltip`)
      .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "white")
      // .style("position", "absolute")
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      .style("padding", "1rem");

    d3.selectAll('.city')
      .on('mouseover', (d, i) => {
        let className;
        if (typeof d === 'string') {
          className = `city-${d.split(' ').join('-')}`;
        } else if (d.data) {
          className = d.data.class;
        } else {
          className = d.class;
        }
        const allOtherCityData = document.querySelectorAll(`.city:not(.${className})`);
        allOtherCityData.forEach(data => {
          data.classList.add('filter');
        })

        // tooltip  
        tooltip
          .style("opacity", 1)
          .style("stroke", "black")
          .html(
            `
              <div class="tooltip__inner">
                <p class="tooltip__city"><strong>City:</strong> ${
                  d.city
                }</p>
                <p class="tooltip__detail"><strong>Overall Rank:</strong> ${
                  d.ranking
                }</p>
                <p class="tooltip__detail"><strong>Total Happiness Score:</strong> ${
                  d.happinessScore
                }</p>
                <p class="tooltip__detail"><strong>Emotional & Physical Well-Being:</strong> ${
                  d.emotionalWellbeing
                }</p>
                <p class="tooltip__detail"><strong>Income & Employment:</strong> ${
                  d.incomeEmployment
                }</p>
                <p class="tooltip__detail"><strong>Community & Environment:</strong> ${
                  d.communityEnvironment
                }</p>
              </div>
            `
          );
        // if available, show toggleable data
        const toggleableData = document.querySelectorAll(`.${className}.city-data-toggle`);
        toggleableData.forEach(data => {
          data.classList.add('show');
        })
      })
      .on('mouseleave', () => {
        const allCityData = document.querySelectorAll('.city');
        allCityData.forEach(data => {
          data.classList.remove('filter');
        })

        // if available, hide toggleble data
        const toggleableData = document.querySelectorAll(`.city-data-toggle`);
        toggleableData.forEach(data => {
          data.classList.remove('show');
        })
      })
  }
}

export default Filter;