# 🍹 CocktailFinder - React Application
A sleek and simple web application built with React to explore the world of cocktails! Search for your favorite drinks, get the ingredients, and learn how to make them. This project was created to demonstrate fundamental skills in front-end development with React.

Try it here: https://cocktail-finder-plum.vercel.app

## Interactive Demonstration
![Demonstration app cocktail finder](/demostracion-cocktail-finder.gif)

## Project Philosophy and Technical Approach
The goal was to build a robust, scalable application with an excellent user experience. I focused on three key pillars:

- **User Experience (UX) First:** From the mobile-first design to the conditional rendering that handles loading and error states, every decision was made with the aim of providing a smooth and intuitive navigation.

- **Clean and Scalable Code:** I used an architecture based on functional components and React Hooks to keep the code modular, reusable, and easy to maintain. State is managed centrally where necessary, following best practices.

- **Modern Workflow (DevOps):** The project is integrated with a CI/CD (Continuous Integration and Deployment) workflow through Vercel. Every push to the main branch automatically deploys a new version, ensuring agility and reliability.

## Tech Stack and Architecture
To build this project, I selected a set of modern and efficient tools:

- **Main Framework:** React (Hooks)

- **useState:** For local, declarative, and predictable state management.

- **useEffect:** To handle side effects such as API calls, controlling the component lifecycle and optimizing requests.

- **Asynchrony Management:** JavaScript (ES6+) async/await to consume TheCocktailDB API in a clean and readable way, including robust error handling with try...catch blocks.

- **Design and Styling:** Modern CSS

- Implementation of a responsive design using Flexbox and CSS Grid.

- **Mobile-First approach**, ensuring an optimal experience on any device.

- **Deployment and Hosting:** Vercel

- Configuration of a CI/CD pipeline for automatic deployments from GitHub.

- High-performance global hosting for fast application loading.

## Challenges and Solutions
During development, an interesting challenge was normalizing the data from the API. The ingredients and their measurements came in up to 15 separate properties (strIngredient1, strMeasure1, etc.).

**Solution:** I created a utility function within the CocktailDetail component that dynamically iterates over these properties, joins them, and transforms them into a single array of [measure, ingredient], which is much easier to render. This demonstrates my ability to manipulate complex data and present it cleanly.

## Potential Future Improvements
This project has a solid foundation, but I am always thinking about how to take it to the next level. The next steps could include:

✅ **Unit Testing:** Implement Jest and React Testing Library to ensure component reliability.

💡 **Advanced State Management:** Integrate Context API or Redux Toolkit to handle more complex global states if the application were to grow (e.g., favorites, themes).

⚡ **Performance Optimization:** Implement React.memo in components and list virtualization for searches with hundreds of results.

## Let's Talk
I am actively looking for opportunities where I can contribute my passion for front-end development and continue to grow professionally. If you found my work interesting and think I could be a good fit for your team, I would love to connect.

📧 Email: agustinatgg@gmail.com

Thank you for your time and for reviewing my project.
