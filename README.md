# Dynamic Quiz App

The Dynamic Quiz App is a web application that allows users to create and take quizes. The application has two main interfaces:

1. **Creator Interface**: This interface allows quiz creators to design and manage quizes. Creators can:
   - Create multiple categories for quizes.
   - Add multiple questions under each category.
   - Provide multiple options for each question.
   - Save all quiz data in a MongoDB database.
   - Generate and share a link to the quiz with users.

2. **User Interface**: This interface allows users to take quizzes created by the creators. Users can:
   - Access the quiz via a shared link.
   - Answer the questions and submit their responses.
   - Have their answers and names stored in the MongoDB database.



### Key Features

- **Quiz Creation**: Creators can design quizzes with multiple categories and questions.
- **Option Management**: Each question can have multiple options for users to choose from.
- **Quiz Link Generation**: A unique link is generated for each quiz, allowing creators to easily share it with users.
- **User Participation**: Users can take quizzes via the provided link and submit their answers.
- **Answer Storage**: User answers are stored in the MongoDB database, along with their names.
- **Result Viewing**: Creators can view the answers submitted by users, along with the names of the participants.
### Technology Stack

- **Frontend**: React.js for building the user interfaces.
- **Backend**: Node.js and Express.js for handling server-side logic.
- **Database**: MongoDB for storing quiz and user data.
- **Styling**: CSS for designing the UI components.

This application aims to provide a seamless and interactive experience for both quiz creators and participants, making it easy to create, share, and take quizzes dynamically.
Feel free to adjust any specifics or add additional details to suit your project.









## Dependencies
react | 
react-dom |
react-redux |
react-router-dom |
Material UI |
redux-toolkit |
bcrypt |
cors |
dotenv |
express |
jsonwebtoken |
mongoose |
## Installation and Setup
1. Install all the dependencies
npm run install-all

2. Create a file named ".env" inside the backend folder. Add data from .env.example file and substitute your credentials there.

3. Start the application 
npm run dev

4. Go to http://localhost:[port]
## Contact
Email: ruttikashrirao@gmail.com

Linkedin: https://www.linkedin.com/in/ruttikashrirao/