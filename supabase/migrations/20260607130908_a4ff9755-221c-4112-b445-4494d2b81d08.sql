
CREATE TABLE public.grocery_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  text TEXT NOT NULL,
  author TEXT NOT NULL DEFAULT 'Anonymous',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.grocery_items TO anon, authenticated;
GRANT ALL ON public.grocery_items TO service_role;

ALTER TABLE public.grocery_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read grocery items"
  ON public.grocery_items FOR SELECT
  USING (true);

CREATE POLICY "Anyone can add grocery items"
  ON public.grocery_items FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can delete grocery items"
  ON public.grocery_items FOR DELETE
  USING (true);

ALTER PUBLICATION supabase_realtime ADD TABLE public.grocery_items;
ALTER TABLE public.grocery_items REPLICA IDENTITY FULL;
