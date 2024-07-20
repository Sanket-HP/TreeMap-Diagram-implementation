const DATA_URL = 'https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/movie-data.json';

const svgWidth = 960;
const svgHeight = 600;

const colors = d3.scaleOrdinal(d3.schemeCategory10);

const tooltip = d3.select('#tooltip');

const svg = d3.select('#tree-map')
              .append('svg')
              .attr('width', svgWidth)
              .attr('height', svgHeight);

const treemap = d3.treemap()
                  .size([svgWidth, svgHeight])
                  .paddingInner(1);

d3.json(DATA_URL).then(data => {
    const root = d3.hierarchy(data)
                   .eachBefore(d => d.data.id = (d.parent ? d.parent.data.id + '.' : '') + d.data.name)
                   .sum(d => d.value)
                   .sort((a, b) => b.value - a.value);

    treemap(root);

    const cell = svg.selectAll('g')
                    .data(root.leaves())
                    .enter().append('g')
                    .attr('transform', d => `translate(${d.x0},${d.y0})`);

    cell.append('rect')
        .attr('class', 'tile')
        .attr('data-name', d => d.data.name)
        .attr('data-category', d => d.data.category)
        .attr('data-value', d => d.data.value)
        .attr('width', d => d.x1 - d.x0)
        .attr('height', d => d.y1 - d.y0)
        .attr('fill', d => colors(d.data.category))
        .on('mouseover', (event, d) => {
            tooltip.style('opacity', 1)
                   .style('left', `${event.pageX + 10}px`)
                   .style('top', `${event.pageY - 30}px`)
                   .html(`Name: ${d.data.name}<br>Category: ${d.data.category}<br>Value: ${d.data.value}`)
                   .attr('data-value', d.data.value);
        })
        .on('mouseout', () => tooltip.style('opacity', 0));

    cell.append('text')
        .attr('class', 'tile-text')
        .selectAll('tspan')
        .data(d => d.data.name.split(/(?=[A-Z][^A-Z])/g))
        .enter().append('tspan')
        .attr('x', 4)
        .attr('y', (d, i) => 13 + i * 10)
        .text(d => d);

    const categories = root.leaves().map(nodes => nodes.data.category);
    const uniqueCategories = [...new Set(categories)];

    const legend = d3.select('#legend')
                     .append('svg')
                     .attr('width', 500)
                     .attr('height', 50);

    const legendItems = legend.selectAll('.legend-item')
                              .data(uniqueCategories)
                              .enter().append('g')
                              .attr('class', 'legend-item')
                              .attr('transform', (d, i) => `translate(${i * 100}, 0)`);

    legendItems.append('rect')
               .attr('width', 20)
               .attr('height', 20)
               .attr('fill', d => colors(d));

    legendItems.append('text')
               .attr('x', 25)
               .attr('y', 15)
               .text(d => d);
});
