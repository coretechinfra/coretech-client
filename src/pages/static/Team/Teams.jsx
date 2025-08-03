import React, { useEffect, useState } from 'react';
import './Teams.css';
import TeamCard from '../../../components/Card/TeamCard';
import { useGlobalContext } from '../../../global/context';
import Carousel from '../../../components/Carousel/Carousel';

const videos = [
	'videos/pixels.mp4',
];

const slideContent = [
	{
		title: 'Our Amazing Team',
		description: 'We have passion to deliver our best',
		buttonText: 'Learn More About Team',
		animation: 'fadeInUp',
	},

];

const Teams = () => {
	const { api } = useGlobalContext();
	const [teams, setTeams] = useState();

	const getTeams = async () => {
		try {
			const res = await api.get(`/api/team`);
			if (res?.status === 200) {
				console.log(res);
				setTeams(res?.data);
			}

		} catch (error) {
			console.log("Error fetching post", error);
		}
	}

	useEffect(() => {
		window.scrollTo(0, 0);
		getTeams();
	}, []);

	return (
		<>
			<Carousel videos={videos} slideContent={slideContent} />
			<section class="">
				<div class="container pb-90">
					<div class="row justify-content-center">
						{
							teams?.map((member, i) => (
								<TeamCard data={member} key={i} />
							))
						}
					</div>
				</div>
			</section>
		</>
	)
}

export default Teams;