import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { type ProductInterface } from '@/lib/apis/useGetProducts'
import { useStore } from '@/lib/store'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const FormSchema = z.object({
  color: z.enum(['purple', 'green', 'blue', 'aqua', 'white', 'pink', 'yellow', 'red', 'orange'], {
    required_error: 'Please select a color.',
  }),
  size: z.enum(['s', 'm', 'l', 'xl', 'xxl', 'xxxl'], {
    required_error: 'Please select a size.',
  }),
})

export function ProductAddForm(props: ProductInterface) {
  const { addItemToCart } = useStore()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    addItemToCart({ ...props, ...data, quantity: 1 })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <div className="grid grid-cols-2 gap-2">
          <FormField
            control={form.control}
            name="color"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Color</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Desired Color" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {[
                      'purple',
                      'green',
                      'blue',
                      'aqua',
                      'white',
                      'pink',
                      'yellow',
                      'red',
                      'orange',
                    ].map((color) => (
                      <SelectItem key={color} value={color}>
                        {color}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="size"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Size</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Desired Size" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {['s', 'm', 'l', 'xl', 'xxl', 'xxxl'].map((size) => (
                      <SelectItem key={size} value={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Add To Cart</Button>
      </form>
    </Form>
  )
}
