import "react";
import { useParams } from "react-router-dom";

const EditOrder = (props) => {
	const { id } = useParams();

	useEffect(() => {
		axios.get(`http://localhost:8000/api/order/${id}`)
			.then(res => {
// set up state tmr
			})
			.catch(err => console.log(err))
	}, [refresh])
	return (
		<section className="editOrder">

		</section>
	)
}

export default EditOrder