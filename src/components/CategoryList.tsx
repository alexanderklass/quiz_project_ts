
const CategoryList = () => {
    interface Category {
        category: string;
        color: string;
    }

    const Categorys: Category[] = [
        {
            category: "Category",
            color: "bg-green-500",
        },
        {
            category: "Category",
            color: "bg-yellow-500",
        },
        {
            category: "Category",
            color: "bg-lime-500",
        },
        {
            category: "Category",
            color: "bg-cyan-500",
        },
        {
            category: "Category",
            color: "bg-teal-500",
        },
        {
            category: "Category",
            color: "bg-purple-500",
        },
        {
            category: "Category",
            color: "bg-red-500",
        },
        {
            category: "Category",
            color: "bg-indigo-500",
        },
    ];
    return (
        <section className="flex flex-col w-2/6 justify-center items-center">
            <p className="text-[#FDE2F3]">PRE_DEFINED_QUIZ</p>
            {Categorys.map((item: Category, index: number) => {
                return (<button
                    key={index}
                    className={`${item.color} hover:scale-105 border border-black hover:bg-[#2A2F4F] hover:text-white font-bold p-3 transition rounded m-1 text-center w-[150px]`}
                >
                    {item.category}
                </button>);
            })}
        </section>
    );
};

export default CategoryList;