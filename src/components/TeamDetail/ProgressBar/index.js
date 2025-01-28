
export default function MyProgessBar({ value }) {
    return (
        <div className="progress" style={{ height: '5px', background: 'transparent' }}>
            <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${value}%`, background: '#EC5078' }}
                aria-valuenow={value}
                aria-valuemin="0"
                aria-valuemax="100"
            ></div>
        </div>
    );
}
