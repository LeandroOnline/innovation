import React from 'react';
import styled from 'styled-components';
import image1 from '../assets/foto1.png';
import image2 from '../assets/foto2.png';
import image3 from '../assets/foto3.png';
import image4 from '../assets/foto4.png';

const Section = styled.section`
	display: flex;
	justify-content: center;
`;
const Container = styled.div`
	max-width: 1200px;
`;
const TitleContainer = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin-top: 15px;
`;
const Vector = styled.div`
	background: linear-gradient(
		rgba(226, 231, 15, 0.75) 50%,
		rgba(255, 6, 185, 0.51)
	);
	width: 48px;
	height: 5px;
`;
const Subtitle = styled.h2`
	font-family: Rubik;
	font-size: 11.5px;
	font-weight: 700;
	line-height: 14px;
	letter-spacing: 0.0025em;
	margin-bottom: 25px;
	text-align: justified;

	@media (min-width: 768px) {
		font-size: 16px;
	}
`;
const Title = styled.h3`
	font-family: Rubik;
	font-size: 42px;
	font-weight: 700;
	line-height: 50px;
	letter-spacing: 0.0025em;
	margin-bottom: 30px;
	text-align: center;
`;
const MembersContainer = styled.div`
	align-items: center;
	display: grid;
	flex-direction: column;
	gap: 10px;
	grid-template-columns: repeat(1, 1fr);
	justify-content: center;
	padding: 8px;

	@media (min-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (min-width: 1024px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;
const Member = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;
const Member2 = styled(Member)`
	display: none;

	@media (min-width: 767px) {
		display: flex;
	}
`;
const Member3 = styled(Member)`
	display: none;

	@media (min-width: 767px) {
		display: flex;
	}

	@media (min-width: 1024px) {
		display: none;
	}
`;
const Image = styled.img`
	height: 450px;
	object-fit: cover;
	width: 100%;
`;
const Job = styled.p`
	font-family: Rubik;
	font-size: 24px;
	font-weight: 400;
	letter-spacing: 0.0025em;
	text-align: left;
`;
const Name = styled.p`
	font-family: Rubik;
	font-size: 24px;
	font-weight: 700;
	text-align: left;
`;
const SocialMedia = styled.div`
	align-items: center;
	border-left: 6px solid transparent;
	border-image: linear-gradient(
			to bottom,
			rgba(226, 231, 15, 0.75) 0%,
			rgba(255, 6, 185, 0.51) 100%
		)
		1;
	display: flex;
	font-size: 24px;
	gap: 14px;
	height: 34.59px;
	margin-bottom: 24px;
	padding-left: 12px;
`;

export const Members = () => {
	return (
		<Section id='members'>
			<Container>
				<TitleContainer>
					<Vector></Vector>
					<Subtitle>Our Team</Subtitle>
					<Title>MEET WITH PHLOX TEAM MEMBERS</Title>
				</TitleContainer>
				<MembersContainer>
					<Member>
						<Image src={image1} alt="Photo member" />
						<Job>Founder and Thinker</Job>
						<Name>Jack Mane</Name>
						<SocialMedia>
							<i className="fa-brands fa-twitter"></i>
							<i className="fa-brands fa-pinterest"></i>
							<i className="fa-brands fa-facebook"></i>
						</SocialMedia>
					</Member>
					<Member>
						<Image src={image2} alt="Photo member" />
						<Job>Founder and Thinker</Job>
						<Name>Jack Mane</Name>
						<SocialMedia>
							<i className="fa-brands fa-twitter"></i>
							<i className="fa-brands fa-pinterest"></i>
							<i className="fa-brands fa-facebook"></i>
						</SocialMedia>
					</Member>
					<Member2>
						<Image src={image3} alt="Photo member" />
						<Job>Founder and Thinker</Job>
						<Name>Jack Mane</Name>
						<SocialMedia>
							<i className="fa-brands fa-twitter"></i>
							<i className="fa-brands fa-pinterest"></i>
							<i className="fa-brands fa-facebook"></i>
						</SocialMedia>
					</Member2>
					<Member3>
						<Image src={image4} alt="Photo member" />
						<Job>Founder and Thinker</Job>
						<Name>Jack Mane</Name>
						<SocialMedia>
							<i className="fa-brands fa-twitter"></i>
							<i className="fa-brands fa-pinterest"></i>
							<i className="fa-brands fa-facebook"></i>
						</SocialMedia>
					</Member3>
				</MembersContainer>
			</Container>
		</Section>
	);
};
