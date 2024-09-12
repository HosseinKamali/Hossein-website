import { useState } from "react";
import { tenTopics } from "../Menu and dropdown/MenuDropDown";

const Topics = () => {
    const [topics, setTopics] = useState(tenTopics);

    return (
        <div className="mt-20 bg-slate-100 rounded-3xl m-auto pt-5 pb-2 h-[420px] mx-4">
            <div className="mt-10 text-center">
                <h2 className="text-4xl font-semibold mb-3">Discover Top 10 Topics</h2>
                <h3 className="text-2xl text-slate-500">This is sub-heading of section</h3>
            </div>

            <div className="m-auto mx-10 mt-14">
                <ul className="flex flex-wrap justify-between items-center">
                    {
                        topics.map((topic,index) => (
                            <li key={index} className="flex w-[18%] my-4">
                                <div className="w-14 h-14 rounded-full  bg-center">
                                    <img className="w-full h-full rounded-xl object-cover" src={topic.imageUrl} alt={topic.title} />
                                </div>

                                <div className="ml-4">
                                    <p className="font-medium">{topic.title}</p>
                                    <p className="text-slate-600">{topic.countArticle} articles</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default Topics;
