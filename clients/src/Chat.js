// import ChatBot from 'react-simple-chatbot';
// import { ThemeProvider } from 'styled-components';
// const steps = [
// 	{
// 	  id: '0',
// 	  message: 'Hey! Welcome to SO_Helpdesk.',
// 	  trigger: '1',
// 	}, 
// 	{
// 	  id: '1',
// 	  message: 'Kindly Enter your Name',
// 	  trigger: 'get_name_input',
// 	},
// 	{
// 	  id: 'get_name_input',
// 	  user: true,
// 	  trigger: 'greet_user',
// 	},
// 	{
// 	  id: 'greet_user',
// 	  message: 'Hi {previousValue}, How can I help you?',
// 	  trigger: 'options',
// 	},
// 	{
// 	  id: 'options',
// 	  options: [
// 		{ value: 'ask_question', label: 'How do I ask a question on Stack Overflow?', trigger: 'ask_question' },
// 		// Add more options as needed
// 	  ],
// 	},
// 	{
// 	  id: 'ask_question',
// 	  message: 'To ask a question on Stack Overflow, click on the "Ask Question" button, fill in the details, and submit.',
// 	  end: true,
// 	},
//   ];
  

// // Creating our own theme
// const theme = {
// 	background: '#C9FF8F',
// 	headerBgColor: '#197B22',
// 	headerFontSize: '20px',
// 	botBubbleColor: '#0F3789',
// 	headerFontColor: 'white',
// 	botFontColor: 'white',
// 	userBubbleColor: '#FF5733',
// 	userFontColor: 'white',
// };

// // Set some properties of the bot
// const config = {
// 	botAvatar: "img.png",
// 	floating: true,
// };

// function App() {
// 	return (
// 		<div className="App">
// 			<ThemeProvider theme={theme}>
// 				<ChatBot

// 					// This appears as the header
// 					// text for the chat bot
// 					headerTitle="GeekBot"
// 					steps={steps}
// 					{...config}

// 				/>
// 			</ThemeProvider>
// 		</div>
// 	);
// }

// export default App;
