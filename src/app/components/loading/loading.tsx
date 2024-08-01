import './loading.css';

type Options = {
    isLoading: Boolean;
};

export default function LoadingOverlay({isLoading}: Options) {
    if (!isLoading) return null;

    return (
        <div className="loading-overlay">
            <div className="loading-spinner"></div>
        </div>
    );
};