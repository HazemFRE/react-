- The app will be available at `http://localhost:3000`.

## Usage
- Click on a skip card to select it (the card highlights, and the button changes to "Selected").
- Use the "Back" button to deselect or "Continue" to proceed (enabled only after selection).
- The layout adjusts automatically for different screen sizes.

## Data Source
- Skip data is fetched from `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft`. A loading state is displayed until data is retrieved.

## Technologies Used
- **React**: For building the user interface.
- **CSS**: For custom styling and responsiveness using Grid.
- **JavaScript**: For logic and API integration.

## Future Improvements
- Add real-time API data fetching with error handling and fallback data.
- Enhance accessibility with ARIA labels and keyboard navigation.
- Incorporate skip images for visual enhancement.
- Optimize performance with lazy loading for large datasets.

## Contact
For questions or support, contact Hazem Frehat at hfrehat105@gmail.com or open an issue on the GitHub repository.