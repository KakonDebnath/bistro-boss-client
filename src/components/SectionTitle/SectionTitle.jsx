

const SectionTitle = ({heading, subHeading, style }) => {
    return (
        <div className="text-center w-4/12 mx-auto mb-12">
            <p className="text-yellow-600 italic mb-3 capitalize">-----{subHeading}-----</p>
            <h3 style={style} className="text-4xl border-y-4 py-3 uppercase">{heading}</h3>
        </div>
    );
};

export default SectionTitle;