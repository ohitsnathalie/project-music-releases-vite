import { Album } from "./components/Album.jsx";
import data from "./data.json";
import "./app.css"

console.log("json ;", data);
//pass json data to  *mArray* in Album
export const App = () => {
	return (
		<div className="app-wrap">
			<Album mArray={data} />
		</div>
	)
}

