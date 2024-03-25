import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="h-full w-full felx items-center justify-center">
      <Loader className="text-muted-foreground aniamte-spin" />
    </div>
  )
}

export default Loading;
