const ServiceList = [
    {
        "Title" : "Finance",
        "Description" : "Offering finance specialists to maximize investment opportunities.",
    },
    {
        "Title" : "BPO",
        "Description" : "Providing efficient resources for streamlined customer support and service.",
    },
    {
        "Title" : "IT & Technology",
        "Description" : "Delivering talented tech professionals for cutting-edge solutions.",
    },
    {
        "Title" : "Hospitality",
        "Description" : "Supplying committed staff to ensure exceptional guest experiences.",
    },
    {
        "Title" : "Banking",
        "Description" : "Offers financial services including deposits, loans, and money management to individuals and businesses.",
    },
    {
        "Title" : "Edutech",
        "Description" : "Equipping businesses with educators and developers for impactful learning solutions.",
    },
    {
        "Title" : "Fintech",
        "Description" : "Enabling access to innovators driving advancements in financial technology.",
    },
    {
        "Title" : "Retail",
        "Description" : "Bringing in marketing and sales experts to elevate customer engagement.",
    },
    {
        "Title" : "FMCG",
        "Description" : "Industry focused on the production and distribution of everyday consumer goods like food, beverages, and personal care products.",
    },
    {
        "Title" : "NBFC",
        "Description" : "Providing financial services like loans and investments without holding a banking license.",
    },
    {
        "Title" : "Telecom",
        "Description" : "Enhancing connectivity with professionals skilled in telecommunications.",
    },
]

export default function Services() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 items-center ">
            {ServiceList.map((services, index) => (
                <div key={index} className="bg-[url('/carousal1.jpeg')] text-white gradient-hover-box rounded-lg drop-shadow shadow-md">
                    <h3 className="text-center text-2xl font-bold py-2">{services.Title}</h3>
                    <p className="text-wrap">{services.Description}</p>
                </div>
            ))}
        </div>
    );
}