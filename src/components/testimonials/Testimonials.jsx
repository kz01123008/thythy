import React from 'react';
import './Testimonials.css';
import Image3 from '../../assets/avatar-3.svg';
import Image4 from '../../assets/nk1.JPG';
import Image5 from '../../assets/nk2.JPG';
import Image6 from '../../assets/nk3.jpg';
import Image7 from '../../assets/nk4.JPG';
import Image8 from '../../assets/nk5.jpg';

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {

	const data = [
		{
			id: 1,
			image: Image3,
			title: "Tran Hoang Thy Thy",
			comment: (
				<>
					<img src={Image4} alt="Example" className="comment__image" />
					Psychological pressure workshop activity hall
				</>
			),
		},
		{
			id: 2,
			image: Image3,
			title: "Tran Hoang Thy Thy",
			comment: (
				<>
					<img src={Image5} alt="Example" className="comment__image" />
					Cu Chi Province
				</>
			),
		},
		{
			id: 3,
			image: Image3,
			title: "Tran Hoang Thy Thy",
			comment: (
				<>
					<img src={Image6} alt="Example" className="comment__image" />
					Gia Lai 2023
				</>
			),
		},
		{
			id: 4,
			image: Image4,
			title: "Tran Hoang Thy Thy",
			comment: (
				<>
					<img src={Image7} alt="Example" className="comment__image" />
					Gia Lai 2024
				</>
			),
		},
		{
			id: 5,
			image: Image4,
			title: "Tran Hoang Thy Thy",
			comment: (
				<>
					<img src={Image8} alt="Example" className="comment__image" />
					Rotaract Saigon
				</>
			),
		},
	];

	return (
		<section className="testimonials container section">

			<h2 className="section__title">Extracurricular</h2>

			<Swiper className="testimonial__container grid"
				modules={[Pagination]}
				spaceBetween={30}
				slidesPerView={1}
				loop={true}
				grabCursor={true}
				pagination={{ clickable: true }}>
				{data.map(({ id, image, title, comment }) => {
					return (
						<SwiperSlide className="testimonial__item" key={id}>
							<div className="thumb">
								<img src={image} alt="" />
							</div>
							<h3 className="testimonial__title">{title}</h3>
							<div className="comment">{comment}</div>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</section>
	)
}

export default Testimonials;
