import './Skill.scss';
import MyProgessBar from '~/components/TeamDetail/ProgressBar';

export default function SkillComponent({ title, value }) {
    return (
        <div className="skill">
            <div className="skill-info">
                <span className="value p-text fw-bold">{title}</span>
                <span className="value p-text fw-bold">{`${value}%`}</span>
            </div>
            <MyProgessBar value={value} />
        </div>
    );
}
