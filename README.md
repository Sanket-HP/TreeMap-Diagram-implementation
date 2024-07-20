# Treemap Diagram

## Description

This project creates an interactive Treemap Diagram using D3.js. The visualization represents data in a hierarchical structure where each tile's size is proportional to its value. Users can hover over tiles to see additional information in a tooltip, and a legend is provided to distinguish different categories.

## Features

- **Title and Description**: Displays a title and a brief description of the Treemap Diagram.
- **Treemap Visualization**: Uses D3.js to create a Treemap that represents hierarchical data.
- **Interactive Tooltips**: Shows detailed information about each tile when hovered over.
- **Legend**: Provides a color-coded legend for different categories in the Treemap.
- **Responsive Design**: The diagram adjusts to different screen sizes.

## User Stories Fulfilled

1. The Treemap Diagram has a title with an `id="title"`.
2. The Treemap Diagram has a description with an `id="description"`.
3. The Treemap contains `rect` elements with a class of `tile` representing the data.
4. At least 2 different fill colors are used for the tiles.
5. Each tile has `data-name`, `data-category`, and `data-value` attributes.
6. The area of each tile corresponds to its `data-value`.
7. The Treemap includes a legend with an `id="legend"`.
8. The legend contains `rect` elements with a class of `legend-item`.
9. The legend `rect` elements use at least 2 different fill colors.
10. Hovering over a tile displays a tooltip with an `id="tooltip"`.
11. The tooltip has a `data-value` property corresponding to the tile's `data-value`.

## Data Source

The Treemap Diagram uses data from the [Movie Sales dataset](https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/movie-data.json). You can replace this dataset with others as needed.

## How to Run the Project

1. Clone this repository:
    ```bash
    git clone https://github.com/your-username/treemap-diagram.git
    ```

2. Navigate to the project directory:
    ```bash
    cd treemap-diagram
    ```

3. Open `index.html` in your web browser.

## Project Structure

- `index.html`: Contains the HTML structure of the page.
- `style.css`: Provides styling for the Treemap Diagram, legend, and tooltip.
- `script.js`: Contains the D3.js code to create and manage the Treemap Diagram.

## Libraries Used

- [D3.js](https://d3js.org/): A JavaScript library for creating data visualizations.

## Contributing

Feel free to open issues or submit pull requests to improve the project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Happy visualizing!

