import "./App.css";
import Text from "./components/Text/Text";
import Cards from "./components/Cards/Cards";
import ToDo from "./Images/todo.png";
import CardItem from "./components/Cards/CardItem";
import male from "./Images/male.png";
import female from "./Images/female.png";
import inProgress from "./Images/inprogress.png";
import review from "./Images/review.png";
import done from "./Images/done.png";

function App() {
	return (
		<div className="App">
			<Text as="h1" className="title" fontSize="lg">
				Kanban
			</Text>
			<Cards className="organize">
				<Cards colorScheme="ToDo">
					<CardItem as="header">
						<img className="cardImage cardHeader" src={ToDo}></img>
						<Text className="cardTitle cardHeader" fontSize="md" as="h2">
							To Do
						</Text>
					</CardItem>

					<CardItem as="section" className="content">
						<Text className="cardItemTitle">Christmas Banners</Text>
						<CardItem className="info">
							<img className="cardPicture" src={male}></img>
							<Text className="cardLabel colorTodo">Label</Text>
						</CardItem>
					</CardItem>
					<CardItem as="section" className="content">
						<Text className="cardItemTitle">Redo Portfolio</Text>
						<CardItem className="info">
							<img className="cardPicture" src={male}></img>
							<Text className="cardLabel colorTodo">Label</Text>
						</CardItem>
					</CardItem>
				</Cards>
				<Cards colorScheme="InProgress">
					<CardItem as="header">
						<img className="cardImage cardHeader" src={inProgress}></img>
						<Text className="cardTitle cardHeader" fontSize="md" as="h2">
							In Progress
						</Text>
					</CardItem>

					<CardItem as="section" className="content">
						<Text className="cardItemTitle">Coffee Break</Text>
						<CardItem className="info">
							<img className="cardPicture" src={female}></img>
							<Text className="cardLabel colorInProgress">Always</Text>
						</CardItem>
					</CardItem>
					<CardItem as="section" className="content">
						<Text className="cardItemTitle">Update Portfolio</Text>
						<CardItem className="info">
							<img className="cardPicture" src={female}></img>
							<Text className="cardLabel colorInProgress">Webflow</Text>
						</CardItem>
					</CardItem>
				</Cards>

				<Cards colorScheme="Review">
					<CardItem as="header">
						<img className="cardImage cardHeader" src={review}></img>
						<Text className="cardTitle cardHeader" fontSize="md" as="h2">
							Review
						</Text>
					</CardItem>

					<CardItem as="section" className="content">
						<Text className="cardItemTitle">Release to Figma Community</Text>
						<CardItem className="info">
							<img className="cardPicture" src={male}></img>
							<Text className="cardLabel colorReview">Release</Text>
						</CardItem>
					</CardItem>
					<CardItem as="section" className="content">
						<Text className="cardItemTitle">User Feedback</Text>
						<CardItem className="info">
							<img className="cardPicture" src={male}></img>
							<Text className="cardLabel colorReview">Feedback</Text>
						</CardItem>
					</CardItem>
					<CardItem as="section" className="content">
						<Text className="cardItemTitle">
							Background images from humaaans.com
						</Text>
						<CardItem className="info">
							<img className="cardPicture" src={male}></img>
							<Text className="cardLabel colorReview">Sourcing</Text>
						</CardItem>
					</CardItem>
				</Cards>
				<Cards colorScheme="Done">
					<CardItem as="header">
						<img className="cardImage cardHeader" src={done}></img>
						<Text className="cardTitle cardHeader" fontSize="md" as="h2">
							Done
						</Text>
					</CardItem>

					<CardItem as="section" className="content">
						<Text className="cardItemTitle">Style Guide</Text>
						<CardItem className="info">
							<img className="cardPicture" src={male}></img>
							<Text className="cardLabel colorDone">UI</Text>
						</CardItem>
					</CardItem>
					<CardItem as="section" className="content">
						<Text className="cardItemTitle">Component Library</Text>
						<CardItem className="info">
							<img className="cardPicture" src={male}></img>
							<Text className="cardLabel colorDone">UI</Text>
						</CardItem>
					</CardItem>
					<CardItem as="section" className="content">
						<Text className="cardItemTitle">Sticker Components</Text>
						<CardItem className="info">
							<img className="cardPicture" src={male}></img>
							<Text className="cardLabel colorDone">UI</Text>
						</CardItem>
					</CardItem>
				</Cards>
			</Cards>
		</div>
	);
}

export default App;
