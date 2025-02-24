import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { MdModeEditOutline, MdFolderDelete } from "react-icons/md";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import Swal from "sweetalert2";

const MyList = () => {
    const [myListLoading, setMyListLoading] = useState(true);
    const [displayData, setDisplayData] = useState(null);
    const { user } = useContext(AuthContext);


    const handleDeleteASpot = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#FF0000",
            cancelButtonColor: "#00FF00",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://asia-voyage-server.vercel.app/delete/${id}`, {
                    method : "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if(data.deletedCount > 0){
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = displayData.filter(data => data._id !==id)
                            setDisplayData(remaining)
                        }
                    })
            }
        });
    }


    useEffect(() => {
        fetch(`https://asia-voyage-server.vercel.app/myList/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setDisplayData(data);
                setMyListLoading(false);
            })
    }, [user])


    return (
        <div className="max-w-6xl mx-auto mt-4 md:mt-6 lg:mt-8 xl:mt-12">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                <div>
                    <Fade delay={1e3} cascade damping={1e-1}>
                        <h2 className="great-vibes text-center mx-auto text-3xl font-semibold mb-2 w-2/3">
                            My Travel Diary: Your Personalized Destination Collection
                        </h2>
                    </Fade>

                    <Fade delay={1e3} cascade damping={1e-1}>
                        <p className="text-sm text-center mx-auto font-medium w-3/4">
                            Curate your own travel experiences with My List ! Explore and manage the tourist spots youve added, creating a personalized travel diary filled with unforgettable destinations.
                        </p>
                    </Fade>

                </div>
                <Link to="/addSpot" className="btn text-white bg-[#FF681A] px-3 py-2 rounded-lg">Add New</Link>
            </div>
            {
                myListLoading ?
                    <span className="loading loading-spinner loading-lg"></span> :
                    displayData ?
                        <div className="mt-6 lg:mt-10 border-t">
                            <div className="overflow-x-auto">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Place Name</th>
                                            <th>Location</th>
                                            <th>Cost</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            displayData.map((touristSpot, index) => <tr key={touristSpot._id} className="hover">
                                                <th>{index + 1}</th>
                                                <td>{touristSpot.touristSpotName}</td>
                                                <td>{touristSpot.location}</td>
                                                <td>${touristSpot.averageCost}</td>
                                                <td className="flex gap-2">
                                                    <Link to={`/myList/update/${touristSpot?._id}`} className="my-update-element">
                                                        <button className="text-lg text-white p-2 rounded-full bg-[#FF681A]"><MdModeEditOutline /></button>
                                                    </Link>
                                                    <Tooltip anchorSelect=".my-update-element" place="top">Update</Tooltip>
                                                    <button onClick={() => handleDeleteASpot(touristSpot._id)} className="my-delete-element text-lg text-white p-2 rounded-full bg-[#FF681A]"><MdFolderDelete /></button>
                                                    <Tooltip anchorSelect=".my-delete-element" place="top">Delete</Tooltip>
                                                </td>
                                            </tr>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div> :
                        <div>
                            <h4>No Spots Found!</h4>
                            <Link to="/addSpot" className="btn text-white bg-[#FF681A] px-3 py-2 rounded-lg">Add New</Link>
                        </div>
            }
        </div>
    );
};

export default MyList;