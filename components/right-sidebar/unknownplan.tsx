import { FolderDown, SquarePen } from 'lucide-react';

const UnknownPlan = () => {
  return (
    <div className="p-4 ">
      <h3 className="text-xl font-bold">AutoKAB Intelligence</h3>
      <p className="text-sm text-slate-400 mt-2">
        We will provide any additional information here to help you along your way.
      </p>
      <div className="space-y-4 mt-4">
        <div className="flex items-center">
          <FolderDown size={24} style={{ width: '45px', height: '30px' }}  />
          <p className="ml-2 text-[12px] text-secondary-foreground ">
            <span className="font-bold">1.</span> Upload a file or select a column to see additional preview information
          </p>
        </div>
        <div className="flex items-center">
          <SquarePen  style={{ width: '45px', height: '30px' }}  />
          <p className="ml-2 text-[12px] text-secondary-foreground ">
            <span className="font-bold">2.</span> Highlight text in the chat to generate clarifying information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnknownPlan;