import { useState, useCallback, useMemo } from 'react';
import { Button } from '../../../assets/styles/app.styles';
const DEFAULT_MAX_LENGTH = 50;

type DescriptionProps = {
    text: string;
    maxLength?: number;
};

const Description: React.FC<DescriptionProps> = ({ text, maxLength = DEFAULT_MAX_LENGTH }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const displayedText = useMemo(() => {
        if (isExpanded || text.length <= maxLength) {
            return text;
        }
        return text.slice(0, maxLength) + '...';
    }, [text, maxLength, isExpanded]);

    const toggleDetails = useCallback(() => {
        setIsExpanded(prev => !prev);
    }, []);

    return (
        <div>
            <p>{displayedText}</p>
            {text.length > maxLength && (
                <Button onClick={toggleDetails}>{isExpanded ? 'Hide Details' : 'Show Details'}</Button>
            )}
        </div>
    );
};

export default Description;
