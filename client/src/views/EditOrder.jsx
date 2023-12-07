import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios";

const EditOrder = (props) => {
	const { id } = useParams();

	return (
		<section className="editOrder">
			hello world
		</section>
	)
}

export default EditOrder