import { PenSquareIcon, Trash2Icon } from "lucide-react"
import { Link } from "react-router"
import { formatDate } from "../lib/utils"
import api from "../lib/axios"
import toast from "react-hot-toast"


const NoteCard = ({notes,setNotes}) => {
    const handleDelete = async (e, id) => {
        e.preventDefault() //get rid of navigation behavior when clicking delete button

        if(!window.confirm("Are you sure you want to delete this notes?"))return;

        try{
            await api.delete(`/notes/${id}`)
            setNotes((prev) => prev.filter((notes) =>notes._id !== id));  // updates the notes when one is deleted, esentialy deletes the image of the notes
            toast.success("Note has been deleted!")
        } catch (error){
            console.log("error in the handle delete",error)
            toast.error("Note failed to delete")
        }
        };

  return (

        <div className="card bg-base-100 hover:shadow-lg transition-all duration-200
        border-t-4 border-solid border-[#00FF9D]">
        <div className="card-body">
            <h3 className="card-tit;e text-base-content">{notes.title}</h3>
            <p className="text-base-content/70 line-clamp-3">{notes.content}</p>
        <Link to={`/notes/${notes._id}`}className="card-actions justify-between items-center mt-4"> 
                <span className="text-sm text-base-content/60">
                    {formatDate(new Date(notes.createdAt))}
                </span>
                <div className="flex items-center gap-1">
                    <button className="btn btn-ghost btn-xs text-white">
                    <PenSquareIcon className="size-4"/>
                    </button>
                    <button className="btn btn-ghost btn-xs text-error" onClick={(e) => handleDelete(e, notes._id)}>
                        <Trash2Icon className="size-4"/>
                    </button>
                </div>
                 </Link>
            </div>
        </div>
   
  );
};
export default NoteCard