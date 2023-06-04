import React from 'react';

interface IProps {
	title: string;
	description?: string;
}

export const Title = ({ title, description }: IProps) => {
	return (
		<div className="title_wrapper">
			<h2 className="title h2">{title}</h2>
			<p className="subtitle h6">{description}</p>
		</div>
	);
};
