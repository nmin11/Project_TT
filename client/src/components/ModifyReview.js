import { useLocation } from 'react-router';

function ModifyReview() {
    const { state } = useLocation();
    return (
        <div>
            <div>{state.title}</div>
        </div>
    );
}
export default ModifyReview;