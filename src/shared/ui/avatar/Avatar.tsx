import Image from 'next/image';
import avatar from '../../assets/images/avatar.jpg';
import './avatar.scss';

export const Avatar = () => {
	return (
		<div className="avatar">
			<Image src={avatar} width={150} height={150} alt="avatar" draggable={false} />
			<h4 className="title h4">Aleksei Kharitonov</h4>
			<p className="subtitle p">Frontend Developer</p>
		</div>
	);
};
