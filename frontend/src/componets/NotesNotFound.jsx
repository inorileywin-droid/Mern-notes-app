import { NotebookIcon } from "lucide-react";
import { Link } from "react-router";

const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 space-y-4 max-w-md mx-auto text-center">
      <div className="bg-primary/10 rounded-full p-6">
        <NotebookIcon className="size-12 text-primary" />
      </div>
      <h2 className="text-2xl font-bold">No notes yet</h2>
      <p className="text-base-content/70">
        Ready to organize your insights? Create your first note to get started on your journey.
      </p>
      <Link to="/create" className="btn btn-primary">
        Create Your First Note
      </Link>
    </div>
    );
};



export default NotesNotFound;