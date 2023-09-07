import test_data from "../TEST_DATA.json"
import {questionStore} from "../store/questions.store.tsx";

const CategoryList = () => {
    interface Category {
        category: string;
        color: string;
        add: () => void;
    }

    const {setQuestionContainer} = questionStore();

    const testCreateCategory = (): void => {
        const DataArray = [...test_data.results];
        setQuestionContainer(DataArray);
    }

    const Category: Category[] = [
        {
            category: "Category",
            color: "bg-green-500",
            add: testCreateCategory
        },
        {
            category: "Category",
            color: "bg-yellow-500",
            add: () => {
                return;
            }
        },
        {
            category: "Category",
            color: "bg-lime-500",
            add: () => {
                return;
            }
        },
        {
            category: "Category",
            color: "bg-cyan-500",
            add: () => {
                return;
            }
        },
        {
            category: "Category",
            color: "bg-teal-500",
            add: () => {
                return;
            }
        },
        {
            category: "Category",
            color: "bg-purple-500",
            add: () => {
                return;
            }
        },
        {
            category: "Category",
            color: "bg-red-500",
            add: () => {
                return;
            }
        },
        {
            category: "Category",
            color: "bg-indigo-500",
            add: () => {
                return;
            }
        },
    ];
    return (
        <section className="flex flex-col w-2/6 justify-center items-center">
            <p className="text-[#FDE2F3]">PRE_DEFINED_QUIZ</p>
            {Category.map((item: Category, index: number) => {
                return (<button
                    key={index}
                    onClick={item.add}
                    className={`${item.color} hover:scale-105 border border-black hover:bg-[#2A2F4F] hover:text-white font-bold p-3 transition rounded m-1 text-center w-[150px]`}
                >
                    {item.category}
                </button>);
            })}
        </section>
    );
};

export default CategoryList;