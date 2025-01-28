import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from 'react-tippy';
import { toast } from 'react-toastify';

export default function TooltipComponent({ url, icon, isShowTooltip, setShowToolTip }) {
    return (
        <Tooltip
            title="Welcome to React"
            position="bottom"
            trigger="manual"
            interactive
            open={isShowTooltip}
            html={
                <div className="div-tippy">
                    <span
                        style={{ color: ' #ec5078', cursor: 'pointer' }}
                        onClick={() => {
                            navigator.clipboard.writeText(url);
                            toast.success('Copied to clipboard', {
                                hideProgressBar: true,
                                autoClose: 1000,
                            });
                        }}
                    >
                        {url}
                    </span>
                </div>
            }
        >
            <FontAwesomeIcon
                icon={icon}
                size="xl"
                className="icon"
                onMouseOver={() => setShowToolTip(true)}
                onMouseOut={() =>
                    setTimeout(() => {
                        setShowToolTip(false);
                    }, 800)
                }
            />
        </Tooltip>
    );
}
