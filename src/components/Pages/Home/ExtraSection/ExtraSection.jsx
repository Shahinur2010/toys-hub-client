const ExtraSection = () => {

    return (
        <div>
            <label htmlFor="my-modal" className="btn">Special Surprise</label>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal bg-slate-200">
                <div className="modal-box">
                    <h3 className="font-bold text-3xl text-black"><span className="text-4xl text-red-300">Congratulations</span> <br /> </h3>
                    <p className="py-4 text-black text-lg text-purple-600">You've been selected for a chance to get one year of subscription to buy Toys for free!</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ExtraSection;